import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import ArrowIcon from "@site/static/img/icons/RightArrorIcon.svg";
import ResourceCard from "@site/src/data/resourceCard";

export default function ResourceCardSection() {
  return (
    <section>
      <div className="container py-12">
        <h2 className="mb-6 text-h2">Core Developer Resources</h2>
        <ul className="tablet:grid tablet:grid-cols-2 tablet:gap-3 desktop:grid-cols-3 desktop:gap-9">
          {ResourceCard.map((card) => (
            <li key={card.title} className="mb-6 tablet:mb-0">
              <Link
                to={card.link}
                title={card.title}
                className="element_card block w-full h-full overflow-hidden rounded shadow-normal shadow-gray-400 hover:shadow-blue-400/60 hover:no-underline"
              >
                <div className=" w-full h-full flex flex-1 flex-col justify-between p-3 tablet:p-5">
                  <div>
                    <div className="flex items-center tablet:block mb-2">
                      <figure className="h-12 w-12 basis-12 tablet:h-20 tablet:w-20 tablet:basis-20 relative overflow-hidden mr-2 tablet:mr-0">
                        <img
                          src={useBaseUrl(card.image)}
                          className="pointer-events-none absolute left-0 top-0 block h-full w-full object-contain"
                          loading="lazy"
                        />
                      </figure>
                      <h3 className="text-h4 tablet:mb-2 line-clamp-2">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex justify-end pt-2">
                    <div className="element_arrow flex h-8 w-8 items-center justify-center rounded">
                      <ArrowIcon width="20" height="20" className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
