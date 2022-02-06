export type Slider = {
    id: string;
    modelName: string;
    bodyType: string;
    modelType: string;
    imageUrl: string;
};

export type SliderProps = {
    data: Slider[];
};
