<script>
  // source of card images:
  // https://code.google.com/archive/p/vector-playing-cards/downloads
  import card10OfDiamonds from "../../../assets/cards/10_of_diamonds.svg";
  import card2OfDiamonds from "../../../assets/cards/2_of_diamonds.svg";
  import card3OfDiamonds from "../../../assets/cards/3_of_diamonds.svg";
  import card4OfDiamonds from "../../../assets/cards/4_of_diamonds.svg";
  import card5OfDiamonds from "../../../assets/cards/5_of_diamonds.svg";
  import card6OfDiamonds from "../../../assets/cards/6_of_diamonds.svg";
  import card7OfDiamonds from "../../../assets/cards/7_of_diamonds.svg";
  import card8OfDiamonds from "../../../assets/cards/8_of_diamonds.svg";
  import card9OfDiamonds from "../../../assets/cards/9_of_diamonds.svg";
  import cardAceOfDiamonds from "../../../assets/cards/ace_of_diamonds.svg";
  import cardJackOfDiamonds from "../../../assets/cards/jack_of_diamonds.svg";
  import cardKingOfDiamonds from "../../../assets/cards/king_of_diamonds.svg";
  import cardQueenOfDiamonds from "../../../assets/cards/queen_of_diamonds.svg";
  import { Toggle } from "$lib";

  let grouped = $state(false);
</script>

<section>
  <h1 class="text-xl">Diamonds</h1>
  <Toggle bind:checked={grouped} />
  <ul class={`deck ${grouped ? "layed-out" : ""}`}>
    <li><img src={cardAceOfDiamonds} alt="Ace of Diamonds" /></li>
    <li><img src={card2OfDiamonds} alt="2 of Diamonds" /></li>
    <li><img src={card3OfDiamonds} alt="3 of Diamonds" /></li>
    <li><img src={card4OfDiamonds} alt="4 of Diamonds" /></li>
    <li><img src={card5OfDiamonds} alt="5 of Diamonds" /></li>
    <li><img src={card6OfDiamonds} alt="6 of Diamonds" /></li>
    <li><img src={card7OfDiamonds} alt="7 of Diamonds" /></li>
    <li><img src={card8OfDiamonds} alt="8 of Diamonds" /></li>
    <li><img src={card9OfDiamonds} alt="9 of Diamonds" /></li>
    <li><img src={card10OfDiamonds} alt="10 of Diamonds" /></li>
    <li><img src={cardJackOfDiamonds} alt="Jack of Diamonds" /></li>
    <li><img src={cardQueenOfDiamonds} alt="Queen of Diamonds" /></li>
    <li><img src={cardKingOfDiamonds} alt="King of Diamonds" /></li>
  </ul>
</section>

<style>
  ul.deck {
    position: relative;
    list-style: none;
    margin-top: 1.25rem;
    li {
      position: absolute;
      top: 0;
      left: calc(sibling-count() * 0.2rem);
      transform-origin: top left;
      transform: translate(
        calc(sibling-index() * -0.2rem),
        calc(sibling-index() * 0rem)
      );
    }
    &.layed-out {
      padding: unset;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 2rem;

      li {
        transform: unset;
        position: unset;
      }

      /* scroll buttons */
      @supports selector(::scroll-button(*)) {
        &::scroll-button(left),
        &::scroll-button(right) {
          appearance: none;
          border-radius: 50%;
          aspect-ratio: 1;
          inline-size: 64px;
          background: var(--icon) no-repeat center center / 75%;
          border: 1px solid var(--color-dark-tint);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
          cursor: pointer;
        }
        
        &::scroll-button(*):not(:disabled):is(:hover, :focus-visible) {
          background-color: var(--color-dark-tint);
        }

        &::scroll-button(left) {
          content: "";
          position-area: left;
          --icon: url("https://api.iconify.design/material-symbols:chevron-left-rounded.svg?color=%23ffffff");
        }

        &::scroll-button(right) {
          content: "";
          position-area: right;
          --icon: url("https://api.iconify.design/material-symbols:chevron-right-rounded.svg?color=%23ffffff");
        }
      }
    }
  }
</style>
