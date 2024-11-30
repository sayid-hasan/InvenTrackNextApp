import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col justify-center min-h-screen ">
      <h2 className="text-3xl mb-4 ">InvenTrack</h2>
      <Link className="block" href="/dashboard/home/overview">
        dashboard
      </Link>
    </div>
  );
}
