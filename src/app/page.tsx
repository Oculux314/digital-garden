import Garden from "@/components/composite/garden";
import ToolBar from "@/components/composite/toolBar";

export default function Home() {
  return (
    <div className="h-full w-full">
      <ToolBar />
      <Garden />
    </div>
  );
}
