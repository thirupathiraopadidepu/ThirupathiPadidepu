import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogs = [
  {
    title: "How Much Does a Website Cost in India?",
    slug: "website-cost-in-india",
    excerpt:
      "A complete breakdown of website development costs in India for startups and businesses.",
    date: "Jan 2025",
  },
  {
    title: "Website vs Web App – What Do You Really Need?",
    slug: "website-vs-web-app",
    excerpt:
      "Confused between a website and a web app? This guide helps you choose the right one.",
    date: "Jan 2025",
  },
  {
    title: "Best Tech Stack for SaaS Startups in 2025",
    slug: "best-tech-stack-for-saas",
    excerpt:
      "Explore modern, scalable tech stacks used by successful SaaS startups.",
    date: "Jan 2025",
  },
];

const BlogPage = () => {
  return (
    <section className="min-h-screen bg-white px-6 py-20">
      {/* SEO */}
      <Helmet>
        <title>Blog | Web, SaaS & AI Development Insights</title>
        <meta
          name="description"
          content="Read expert insights on web development, SaaS, AI automation, pricing, and startup technology."
        />
        <link rel="canonical" href="https://thirupathipadidepu.in/blog" />
      </Helmet>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-bold mb-4">Tech & Business Blog</h1>
        <p className="text-gray-600">
          Insights on Web Development, SaaS, AI Automation & Startup Growth.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="border rounded-xl p-6 hover:shadow-xl transition"
          >
            <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
            <h2 className="text-xl font-semibold mb-3">{blog.title}</h2>
            <p className="text-gray-600 mb-4">{blog.excerpt}</p>

            <Link
              to={`/blog/${blog.slug}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogPage;
