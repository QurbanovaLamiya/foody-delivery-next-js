import { EmptyContainer, Text } from "./EmptyBasket.styled";

import Image from "next/image";

const EmptyBasket = () => {
  return (
    <EmptyContainer>
      <Image
        src="/images/emptyBasket/empty.svg"
        alt="basket"
        width={263}
        height={236}
      />
      <Text>
        Opps!
        <br /> Basket empty
      </Text>
    </EmptyContainer>
  );
};

export default EmptyBasket;
