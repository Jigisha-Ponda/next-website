import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { Portfolio } from "@/types/blog";

const portfoliosDirectory = join(process.cwd(), "markdown/portfolios");

export function getPortfolioSlugs(): string[] {
  return fs.readdirSync(portfoliosDirectory);
}

export function getPortfolioBySlug(slug: string, fields: string[] = []): Portfolio {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(portfoliosDirectory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const item: any = {};

  fields.forEach((field) => {
    if (field === "slug") {
      item.slug = realSlug;
    }
    if (field === "content") {
      item.content = content;
    }
    if (typeof data[field] !== "undefined") {
      item[field] = data[field];
    }
  });

  return item as Portfolio;
}

export function getAllPortfolios(fields: string[] = []): Portfolio[] {
  const slugs = getPortfolioSlugs();
  return slugs
    .map((slug) => getPortfolioBySlug(slug, fields))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
