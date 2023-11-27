interface IProps {
  data?: {
    protein?: number;
    fat?: number;
    carbs?: number;
  };
}

const Macros = (props: IProps) => {
  const { data } = props;
  return (
    <div className="macros">
      <p>
        Protein: <span>{Math.round(data!.protein!)} </span>
        grams/day
      </p>
      <p>
        Fat: <span>{Math.round(data!.fat!)} </span>
        grams/day
      </p>
      <p>
        Carbs: <span>{Math.round(data!.carbs!)} </span>
        grams/day
      </p>
    </div>
  );
};

export default Macros;
