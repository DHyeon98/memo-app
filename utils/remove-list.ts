import { getItem, setItem } from "@/apis";

export const handleRemoveData = async (
  date: string,
  updateData: () => void
) => {
  const storedData = await getItem("data");
  if (storedData) {
    const parseData = JSON.parse(storedData!);
    const filteredData = parseData.filter((item: any) => item.id !== date);
    await setItem("data", JSON.stringify(filteredData));
    updateData();
  }
};
