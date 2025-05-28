import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";
import ArrowIcon from "@site/static/img/icons/RightArrorIcon.svg";

export default function ProductCardSection() {
  return (
    <section>
      <div className="container py-12">
        <h2 className="mb-6 text-h2">Getting Started with EdgeSync</h2>
        <Link
          to="/EdgeSync/Introduction"
          title="EdgeSync"
          className="element_card block w-full overflow-hidden rounded shadow-normal shadow-gray-400 hover:shadow-blue-400/60 tablet:flex hover:no-underline"
        >
          <div className="flex w-full flex-col justify-between p-3 tablet:h-80 tablet:w-6/12 tablet:p-5">
            <div>
              <h3 className="text-h4 tablet:line-clamp-3 tablet:max-h-[5.25rem] desktop:line-clamp-2 desktop:max-h-14 mb-2">
                EdgeSync
              </h3>
              <p className="mb-2 text-sm text-gray-600 tablet:line-clamp-5 tablet:max-h-[6.25rem] desktop:line-clamp-4 desktop:max-h-20">
                Offers APIs and SDKs for integration and management of
                containerized edge devices, empowering developers to deploy,
                monitor, and control hardware resources across heterogeneous
                environments.
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <div
                  className="w-[78px] basis-[78px] desktop:w-[160px] desktop:basis-[160px]"
                >
                  <figure className="relative h-0 w-full overflow-hidden rounded pb-[56.25%]">
                    <picture>
                      <source
                        srcSet={useBaseUrl("/img/img_advantech_web.webp")}
                        media="(min-width: 997px)"
                      />
                      <source
                        srcSet={useBaseUrl("/img/img_advantech_tablet.webp")}
                        media="(min-width: 768px)"
                      />
                      <img
                        src={useBaseUrl("/img/img_advantech_mobile.webp")}
                        className="pointer-events-none absolute left-0 top-0 block h-full w-full object-contain"
                        loading="lazy"
                      />
                    </picture>
                  </figure>
                </div>
              </div>
              <div className="hidden justify-end tablet:flex">
                <div className="element_arrow flex h-8 w-8 basis-8 items-center justify-center rounded text-blue-400">
                  <ArrowIcon width="20" height="20" className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex min-h-[200px] w-full items-center overflow-hidden p-3 tablet:h-80 tablet:min-h-0 tablet:w-6/12 tablet:p-5">
            <figure className="absolute left-0 top-0 h-full w-full overflow-hidden">
              <picture>
                <source
                  srcSet={useBaseUrl("/img/img_getting_started_web.webp")}
                  media="(min-width: 997px)"
                />
                <source
                  srcSet={useBaseUrl("/img/img_getting_started_tablet.webp")}
                  media="(min-width: 768px)"
                />
                <img
                  src={useBaseUrl("/img/img_getting_started_mobile.webp")}
                  className="pointer-events-none absolute left-0 top-0 block h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
            </figure>
          </div>
        </Link>
      </div>
    </section>
  );
}
