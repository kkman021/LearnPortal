import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import Translate, { translate } from "@docusaurus/Translate";

export default function FooterCopyright() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="tablet:flex tablet:items-center">
      <figure className="mb-2 h-4 w-20 tablet:mb-0 relative overflow-hidden">
        <img
          src="/img/logo.svg"
          alt="Advantech Developer Portal" 
          className="pointer-events-none block h-full w-full"
          loading="lazy"
        />
      </figure>
      <p className="mb-2 text-sm tablet:mb-0 tablet:border-r tablet:border-solid tablet:border-gray-400 tablet:px-4">
        <Translate
          id="footer.copyright"
          values={{ year: year || "----" }}
        >
          {"© 1983-{year} Advantech Co., Ltd."}
        </Translate>
      </p>
      <p className="text-sm tablet:border-r tablet:border-solid tablet:border-gray-400 tablet:px-4">
        <Link
          to="https://www.advantech.com/en/legal/privacy"
          className="font-bold hover:text-blue-400"
          title={translate({ id: "footer.privacy", message: "Privacy Policy" })}
        >
          <Translate id="footer.privacy">Privacy Policy</Translate>
        </Link>
      </p>
    </div>
  );
}
