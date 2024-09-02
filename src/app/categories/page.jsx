import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import categoriesData from "../../../public/data/categories.json";
export default function Categories(){

    const groupedCategories = [];
  let i = 0;
  while (i < categoriesData.length) {
    if ((groupedCategories.length + 1) % 2 !== 0) {
      // Odd-indexed rows: 3 items
      groupedCategories.push(categoriesData.slice(i, i + 3));
      i += 3;
    } else {
      // Even-indexed rows: 4 items
      groupedCategories.push(categoriesData.slice(i, i + 4));
      i += 4;
    }
  }
    return<>
    <Header />
    <div className="flex flex-col justify-center items-center py-[75px]  gap-12">
    <h1 className="text-5xl text-glow">Categories</h1>
    <div className="flex flex-col items-center justify-center gap-14 w-full px-[100px] text-center text-2xl ">
        {groupedCategories.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`grid ${row.length === 3 ? 'grid-cols-3' : 'grid-cols-4'} gap-24`}
          >
            {row.map((category, index) => (
              <div key={index} className="category-item text-white border rounded-[30px] w-[326px] py-[25px] px-3 shadow-glow">
                {category}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
}