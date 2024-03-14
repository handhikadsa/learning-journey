import DrawerComponent from "@/components/DrawerComponent";
import ModalComponent from "@/components/ModalComponent";
import NavbarComponent from "@/components/NavbarComponent"
import CarouselComponent from "@/components/CarouselComponent";
import SidebarComponent from "@/components/SidebarComponent";
import Lightbox from "@/components/LightboxComponent";
import GalleryComponent from "@/components/GalleryComponent";
import { compileMDX } from 'next-mdx-remote/rsc'

export default async function Home() {

  const { content, frontmatter } = await compileMDX({
    source: `
      title: RSC Frontmatter Example
      ---
      # Hello World
      This is from Server Components!

      I just love **bold text**.

      Italicized text is the *cat's meow*.
      #### The quarterly results look great!
      
      - Revenue was off the chart.
      - Profits were higher than ever.
      
      *Everything* is going according to **plan**.
      1. First item
      1. First item
      2. Second item
      3. Third item
          1. Indented item
          2. Indented item
      4. Fourth item
      `,
    options: { parseFrontmatter: true },
  })

  const data = [
    {
      src: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80", 
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },

  ]

  return (
    <main className="mx-auto px-5 md:px-0">
      <div className="flex">
        <SidebarComponent />
        <div className="w-full">
          {/* <NavbarComponent /> */}
           <article className="prose prose-zinc px-10">
            {content}
          </article>
          {/* <div className="flex justify-center w-full gap-10 my-10">
            <DrawerComponent />
            <ModalComponent />
          </div>
          <div className="grid max-w-screen-md mx-auto mb-5">
            <CarouselComponent />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 justify-center max-w-screen-xl mx-auto mb-10">
            <Lightbox images={data} /> 
          </div>

          <div className="max-w-screen-xl mx-auto">
            <GalleryComponent />
          </div> */}
        </div>
      </div>
    </main>
  );
}
