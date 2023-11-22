import { Fragment } from "react";
import { FooterList, FooterListItem } from "./FooterNavList.styled";

const FooterNavList = () => {
  return (
    <Fragment>
      <FooterList>
        <FooterListItem>Popular</FooterListItem>
        <FooterListItem>Programming</FooterListItem>
        <FooterListItem>Books for children</FooterListItem>
        <FooterListItem>Psychology</FooterListItem>
        <FooterListItem>Business</FooterListItem>
      </FooterList>
      <FooterList>
        <FooterListItem>Cash</FooterListItem>
        <FooterListItem>Delivery</FooterListItem>
        <FooterListItem>Payment</FooterListItem>
        <FooterListItem>About the store</FooterListItem>
      </FooterList>
      <FooterList>
        <FooterListItem>Help</FooterListItem>
        <FooterListItem>Contacts</FooterListItem>
        <FooterListItem>Purchase returns</FooterListItem>
        <FooterListItem>Buyer help</FooterListItem>
      </FooterList>
    </Fragment>
  );
};

export default FooterNavList;
