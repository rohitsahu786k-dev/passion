import type { Metadata } from 'next';
import { BlogForm, type BlogFormData } from '@/components/admin/BlogForm';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { connectDB } from '@/lib/mongodb';
import { Blog } from '@/lib/models/Blog';

export const metadata: Metadata = {
  title: 'Admin — Edit Blog',
  robots: { index: false, follow: false },
};

type Props = { params: Promise<{ id: string }> };

export default async function EditBlogPage({ params }: Props) {
  const session = await auth();
  if (!session) redirect('/admin/login');

  const { id } = await params;

  await connectDB();
  const blog = await Blog.findById(id).lean<{
    title: string; slug: string; excerpt: string; content: string;
    city: string; cityName: string; service: string;
    isPublished: boolean; isFeatured: boolean; publishedAt: Date;
    metaTitle: string; metaDescription: string; focusKeyword: string;
    keywords: string[]; tags: string[]; category: string; readingTime: number;
    author: { name: string; designation: string };
    featuredImage?: { url: string; alt: string };
    faqs: Array<{ question: string; answer: string }>;
  }>();

  if (!blog) redirect('/admin/blogs/');

  const initial: Partial<BlogFormData> = {
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content,
    city: blog.city,
    cityName: blog.cityName,
    service: blog.service,
    isPublished: blog.isPublished,
    isFeatured: blog.isFeatured,
    publishedAt: blog.publishedAt ? new Date(blog.publishedAt).toISOString().slice(0, 16) : '',
    metaTitle: blog.metaTitle,
    metaDescription: blog.metaDescription,
    focusKeyword: blog.focusKeyword,
    keywords: Array.isArray(blog.keywords) ? blog.keywords.join(', ') : '',
    tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : '',
    category: blog.category,
    readingTime: blog.readingTime,
    authorName: blog.author?.name || '',
    authorDesignation: blog.author?.designation || '',
    imageUrl: blog.featuredImage?.url || '',
    imageAlt: blog.featuredImage?.alt || '',
    faqs: blog.faqs || [],
  };

  return <BlogForm initialData={initial} blogId={id} />;
}
