// app/api/unsubscribe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase';

// Example: /api/unsubscribe/:user-short-id
// Example: /api/unsubscribe/JIvevPN
export async function GET(
  req: NextRequest,
  { params }: { params: { userShortId: string } }
) {
  const userShortId = params.userShortId;
  if (!userShortId) {
    return NextResponse.json({ error: 'Missing user id' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();

  // check if user exists
  const { data: user, error: userError } = await supabase
    .from('icp_profiles')
    .select('*')
    .eq('short_id', userShortId);

  if (user?.length === 0) {
    return new NextResponse('User not found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  if (userError) {
    return new NextResponse('Error fetching user', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // check if user is already unsubscribed
  if (user[0].is_unsubscribed) {
    return new NextResponse('User already unsubscribed', {
      status: 200,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // Update the record to mark as unsubscribed
  const { error, count } = await supabase
    .from('icp_profiles')
    .update({ is_unsubscribed: true })
    .eq('short_id', userShortId);

  if (error) {
    return new NextResponse('Error unsubscribing', {
      status: 500,
      headers: { 'Content-Type': 'text/plain' },
    });
  }

  // Optionally, render a simple HTML response
  return new NextResponse('Successfully unsubscribed', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}
