import { useDispatch } from "react-redux";
import { sort } from "../../reducers/flightListReducer";
import { useEffect, useState } from "react";
import { SortVariants } from "./types";

export const SortButtons = () => {
  const dispatch = useDispatch();
  const [sortVariant, setSortVariant] = useState(SortVariants.CHEAPEST);

  useEffect(() => {
    if (Object.values(SortVariants).includes(sortVariant)) {
      dispatch(sort(sortVariant));
    }
  }, [sortVariant]);

  const onClick = (sortVariant: SortVariants) => {
    setSortVariant(sortVariant);
  };

  return (
    <div className='sortButtons sortButtons--margin-bottom'>
      <button
        className={
          SortVariants.CHEAPEST === sortVariant
            ? "button button--active button--border-radius-left"
            : "button button--border-radius-left"
        }
        onClick={() => onClick(SortVariants.CHEAPEST)}
      >
        Найдешевший
      </button>
      <button
        className={
          SortVariants.FASTEST === sortVariant
            ? "button button--active"
            : "button"
        }
        onClick={() => onClick(SortVariants.FASTEST)}
      >
        Найшвидший
      </button>
      <button
        className={
          SortVariants.OPTIMAL === sortVariant
            ? "button button--active button--border-radius-right"
            : "button button--border-radius-right"
        }
        onClick={() => onClick(SortVariants.OPTIMAL)}
      >
        Оптимальний
      </button>
    </div>
  );
};
