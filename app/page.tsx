import Card from "./components/Card";

type RecipeProps = {
  id: number;
  name: string;
  time: string;
  thumbnail_url: string;
};

export default async function Home() {
  const endpoint = "/recipes/list";
  const apiUrl = process.env.NEXT_PUBLIC_API || "";
  const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_KEY || "",
    "x-rapidapi-host": process.env.NEXT_PUBLIC_HOST || "",
  };

  const response = await fetch(apiUrl + endpoint, { headers });
  const data = await response.json();

  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body has-text-centered">
          <p className="title">Tasty Recipes</p>
          <p className="subtitle">
            A minimal recipe sharing app built using Next.js & Rapid API
          </p>
        </div>
      </section>

      <section className="container">
        <div className="columns is-multiline my-3">
          {data?.results?.map((item: RecipeProps) => (
            <div key={item?.id} className="column is-3">
              <Card
                time={item?.time}
                name={item?.name}
                thumbnail={item?.thumbnail_url}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
