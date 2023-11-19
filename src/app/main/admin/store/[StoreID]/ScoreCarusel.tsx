"use client";

import { Button } from "primereact/button";
import { Carousel } from "primereact/carousel";

interface ScoreMessageModel {
  message: string;
}

const ScoreTemplate = (score: ScoreMessageModel) => {
  return (
    <>
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div>
          <h4 className="mb-1">{score.message}</h4>
          <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" />
            <Button
              icon="pi pi-star-fill"
              className="p-button-success p-button-rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const ScoreCarusel = () => {
  const scores = [
    {
      message: "留言系統尚未開放1",
    },
    {
      message: "留言系統尚未開放2",
    },
    {
      message: "留言系統尚未開放3",
    },
    {
      message: "留言系統尚未開放4",
    },
    {
      message: "留言系統尚未開放5",
    },
    {
      message: "留言系統尚未開放6",
    },
  ];
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "576px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  return (
    <>
      <Carousel
        value={scores}
        numScroll={1}
        numVisible={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={ScoreTemplate}
        circular
        autoplayInterval={10000}
      />
    </>
  );
};

export default ScoreCarusel;
