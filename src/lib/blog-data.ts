export type BlogPost = {
  slug: string;
  title: string;
  category: "Analysis" | "Institutional" | "Technical" | "Updates";
  excerpt: string;
  date: string;
  readTime: string;
  body: string;
};

export const POSTS: BlogPost[] = [
  {
    slug: "why-africa-needs-sovereign-ai",
    title: "Why Africa Needs Sovereign AI, Not Borrowed Tools",
    category: "Analysis",
    excerpt:
      "Frontier models reflect the data, languages, and assumptions of the regions that built them. For Africa, sovereignty is not a luxury, it is infrastructure.",
    date: "2026-04-12",
    readTime: "7 min",
    body: `## A continent absent from the training set

Every major frontier model has been trained on a corpus that is overwhelmingly English, Mandarin, and a handful of European languages. Of the more than two thousand languages spoken across Africa, almost none are represented at scale.

## Sovereignty is infrastructure

When a continent does not own the models that mediate access to information, commerce, and government services, it does not just lose convenience. It loses agency.

### What sovereignty looks like in practice

It looks like African researchers training African models on African data, hosted on African infrastructure, governed by African institutions. None of those four conditions are currently met at scale.

## What Kora Lab is building

We are building the technical lab that the Kigali Declaration assumes already exists. The political will is there. The capital is committed. The execution layer is what is missing.`,
  },
  {
    slug: "kigali-declaration-one-year-on",
    title: "The Kigali Declaration, One Year On",
    category: "Institutional",
    excerpt:
      "Fifty four nations signed. Sixty billion dollars was pledged. A year later, the question is no longer about intent. It is about execution.",
    date: "2026-04-02",
    readTime: "6 min",
    body: `## A unified continental position

The Africa Declaration on AI signed in Kigali was the first time fifty four African nations spoke with a single voice on artificial intelligence.

## From declaration to delivery

A declaration is a starting line, not a finish line. The next phase requires labs, datasets, models, and trained researchers, all operating at continental scale.

## Where Kora Lab fits

We exist to be the execution counterpart to the policy work already done by the African Union, the AfDB, Smart Africa, and national digital strategies.`,
  },
  {
    slug: "building-data-pipelines-that-create-jobs",
    title: "Building Data Pipelines That Create Jobs",
    category: "Technical",
    excerpt:
      "AI training data is labor. If that labor is sourced on the continent, the value chain shifts. Here is how we are designing it.",
    date: "2026-03-20",
    readTime: "8 min",
    body: `## The labor underneath the model

Every model is the residue of human labor: writing, labeling, correcting, reviewing. When that labor is outsourced from Africa for cents per hour, the value flows out.

## A different design

Our data pipelines are designed so that contributors are co-owners of the resulting datasets. The dataset is the asset. The contributor shares in the upside.

## What this enables

It enables a generation of African contributors to participate in the AI economy as builders, not just as workers.`,
  },
];
