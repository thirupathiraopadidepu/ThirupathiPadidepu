import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogs } from "../data/blogs";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="py-20 text-center text-gray-600">Post not found</div>
    );
  }

  return (
    <article className="min-h-screen bg-white px-6 py-20">
      {/* SEO */}
      <Helmet>
        <title>{post.title} | Thirupathi Padidepu</title>
        <meta name="description" content={post.description} />
        <link
          rel="canonical"
          href={`https://thirupathipadidepu.in/blog/${post.slug}`}
        />
      </Helmet>

      <div className="max-w-3xl mx-auto">
        <Link to="/blog" className="text-blue-600 hover:underline text-sm">
          ← Back to Blog
        </Link>

        <h1 className="text-4xl font-bold mt-6 mb-6">{post.title}</h1>

        <div
          className="prose prose-blue max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 p-6 bg-gray-100 rounded-xl text-center">
          <h3 className="text-xl font-semibold mb-3">
            Need help building your project?
          </h3>
          <p className="text-gray-600 mb-4">
            I help startups & businesses build scalable web, SaaS & AI
            solutions.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
