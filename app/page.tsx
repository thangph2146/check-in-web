import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Thêm nội dung dài để test scroll */}
      <div className="space-y-20 py-20">
        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Section 1</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Section 2</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Section 3</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Section 4</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </section>

        <section className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-10">Section 5</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
        </section>
      </div>
    </div>
  );
}
