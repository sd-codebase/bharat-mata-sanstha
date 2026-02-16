import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { branches } from "@/data/branches";
import BranchDetailContent from "@/components/branches/BranchDetailContent";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return branches.map((branch) => ({ id: String(branch.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const branch = branches.find((b) => b.id === Number(id));
  if (!branch) return { title: "Branch Not Found" };
  return { title: branch.name };
}

export default async function BranchDetailPage({ params }: Props) {
  const { id } = await params;
  const branch = branches.find((b) => b.id === Number(id));

  if (!branch) notFound();

  return (
    <>
      {/* Page Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {branch.name}
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-4">
            <Link href="/" className="hover:text-saffron transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/branches"
              className="hover:text-saffron transition-colors"
            >
              Branches
            </Link>
            <span>/</span>
            <span className="text-saffron">{branch.name}</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="bg-saffron/20 text-saffron text-sm font-semibold px-3 py-1 rounded-full">
              {branch.type}
            </span>
            {branch.established && (
              <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
                Est. {branch.established}
              </span>
            )}
            <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">
              {branch.students} Students
            </span>
          </div>
        </div>
      </section>

      <BranchDetailContent branch={branch} />
    </>
  );
}
