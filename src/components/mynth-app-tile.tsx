import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function MynthAppTile({ title, description, imageSrc, href }) {
  return (
    <CardContainer className="w-full h-auto py-4">
      <CardBody className="bg-black rounded-xl w-full transition-all duration-500 flex justify-between items-center gap-5">
        <div className="flex items-center gap-5">
          <CardItem translateZ="100" rotateZ="10">
            <a href={href} target="__blank">
              <img
                src={imageSrc}
                height="150"
                width="150"
                className="object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </a>
          </CardItem>

          <CardItem translateZ="150">
            <a href={href} target="__blank">
              <h3 className="text-neutral-400 text-2xl">{title}</h3>
            </a>

            <a href={href} target="__blank">
              <p className="text-neutral-500">{description}</p>
            </a>
          </CardItem>
        </div>

        <div>
          <CardItem translateZ="100">
            <a
              href={href}
              target="__blank"
              className="text-xl text-neutral-400"
            >
              Open app →
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
