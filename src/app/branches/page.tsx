import { Metadata } from "next";
import { branches } from "@/data/branches";
import BranchCard from "@/components/branches/BranchCard";

export const metadata: Metadata = {
  title: "Our Branches",
};

export default function BranchesPage() {
  const totalStudents = branches.reduce((sum, b) => sum + b.students, 0);

  return (
    <>
      {/* Page Banner */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Branches
          </h1>
          <div className="flex items-center gap-2 text-gray-300 text-sm mb-6">
            <a href="/" className="hover:text-saffron transition-colors">
              Home
            </a>
            <span>/</span>
            <span className="text-saffron">Branches</span>
          </div>
          <div className="flex flex-wrap gap-6 text-white">
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="font-bold text-xl">{branches.length}</span>{" "}
              <span className="text-gray-300">Centers</span>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-lg">
              <span className="font-bold text-xl">
                {totalStudents.toLocaleString()}+
              </span>{" "}
              <span className="text-gray-300">Students</span>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
