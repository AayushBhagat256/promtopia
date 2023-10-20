import Feed from "@components/Feed"


function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI - powered prompts</span>
      </h1>
      <p className="desc text-center">An open source AI prompting tool Designed with objective to achive efficiency for AI tools on a user level. <br />Discover , create and share creative prompts</p>

      {/* feed component  */}
      <Feed/>
    </section>
  )
}

export default Home
