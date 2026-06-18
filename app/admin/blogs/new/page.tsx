import type { Metadata } from 'next';
import { BlogForm } from '@/components/admin/BlogForm';

export const metadata: Metadata = {
  title: 'Admin — New Blog',
  robots: { index: false, follow: false },
};

export default function NewBlogPage() {
  return <BlogForm />;
}
