import { FunctionComponent, PropsWithChildren } from "react";

interface FooterSmallProps {
  absolute: boolean;
}

const FooterSmall: FunctionComponent<PropsWithChildren<FooterSmallProps>> = ({
  absolute,
}) => {
  return (
    <>
      <footer className={"bottom-0 bg-blueGray-800 fixed"}>
        <div className="container mx-auto px-4">
          <hr className="mb-6 border-b-1 border-blueGray-600" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <div className="text-black hover:text-blueGray-300 text-sm font-semibold py-1">
                  Creative Allen
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSmall;
