import languages from "@/configs/languages";
import colors from "@/configs/colors";
import { Product } from "@/components";


export default function Home() {
  console.log(`bg-${colors.Home.navbar_bg} w-100 h-100`)
  return (
    <>
      <div className={`bg-${colors.Home.navbar_bg} w-100 h-100`}>{languages.get('header')}</div>
      <Product />
    </>
  );
}
