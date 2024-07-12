type CardProps = {
  [key: string]: string;
};

export default function Card({ time, thumbnail, name }: CardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={thumbnail} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src="https://bulma.io/assets/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="content">
          {name}
          <br />
          <time dateTime={time}>{time}</time>
        </div>
      </div>
    </div>
  );
}
