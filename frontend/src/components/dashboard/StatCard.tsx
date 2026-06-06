interface StatCardProps {
    title: string;
    value: string;
  }
  
  export default function StatCard({
    title,
    value,
  }: StatCardProps) {
    return (
      <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl p-6">
        <p className="text-gray-500 mb-2">
          {title}
        </p>
  
        <h2 className="text-3xl font-bold">
          {value}
        </h2>
      </div>
    );
  }