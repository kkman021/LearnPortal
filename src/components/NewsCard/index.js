import React from 'react';
import Link from "@docusaurus/Link";
import useBaseUrl from '@docusaurus/useBaseUrl';
import ArrowIcon from "@site/static/img/icons/RightArrorIcon.svg";
import NewsCardData from '@site/src/data/newsCard';

export default function NewsCardSection() {
  const youtubeVideoId = "S18dfukz_Eo"; // 替換為您的 YouTube 影片 ID

  return (
    <section>
      <div className="container py-12">
        <h2 className="mb-6 text-h2">See What's Possible at the Edge</h2>
        <div className="w-full justify-between desktop:flex">
          {/* YouTube 影片區域 */}
          <div className="mb-5 desktop:mb-0 desktop:h-full desktop:w-6/12 desktop:pr-8">
            <div className="relative block overflow-hidden bg-black h-0 w-full mb-4 rounded pb-[56.25%]">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                title="Edge Computing Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 h-full w-full"
              />
            </div>
            <p className="font-bold mb-2">
              WISE-Edge - Scaling Edge AI with Advantech and Edge Impulse
            </p>
            {/* <p className="text-sm text-gray-600">
              Step into the future of industrial intelligence and edge
              orchestration.
            </p> */}
          </div>
          {/* 資源連結區域 */}
          <div className="desktop:w-6/12">
            <h3 className="text-h4 mb-2">What's New</h3>
            <ul>
              {
                NewsCardData.map((card) => (
                  <li
                    key={card.title}
                    className="border-b border-solid border-gray-400 py-4"
                  >
                    <Link
                      to={card.link}
                      title={card.title}
                      className="flex items-center"
                    >
                      <div className="flex flex-1 items-center">
                        <figure className="relative h-12 w-12 basis-12 overflow-hidden tablet:h-20 tablet:w-20 tablet:basis-20">
                          <img
                            src={useBaseUrl(card.image)}
                            className="pointer-events-none absolute left-0 top-0 block h-full w-full object-contain"
                            loading="lazy"
                          />
                        </figure>
                        <div className="flex-1 pl-3 pr-2 tablet:pl-5">
                          <div className="tablet:text-lg font-bold">{card.title}</div>
                        </div>
                      </div>
                      <ArrowIcon width="20" height="20" className="h-5 w-5 basis-5" />
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
