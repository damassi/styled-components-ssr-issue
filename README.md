## styled-components@4.0.3

This reproduces an issue where styled-components@4.0.3 fails to collect styles (`ServerStyleSheet#collectStyles`) from modules that are `yarn link`d.

**Issue**: https://github.com/styled-components/styled-components/issues/2322

```sh
yarn setup
yarn start
```

### Output:

```sh
[/3rd-party-lib]

  This is the main component library. Components are created here and exported
  for consumption in other apps.

  When developing locally, this module is accessed from other modules via yarn link.

  Running `collectStyles` from here will properly extract CSS:

  CSS:
  <style data-styled="UoSJW jSiEbM cyinBP gNxrLP fDAdfP" data-styled-version="4.0.3">
    /* sc-component-id: sc-bdVaJa */
    .sc-bdVaJa {} .UoSJW{width:100%;}
    /* sc-component-id: sc-bwzfXH */
    .sc-bwzfXH {} .jSiEbM{color:blue;}
    /* sc-component-id: sc-htpNat */
    .sc-htpNat {} .cyinBP{color:green;}
    /* sc-component-id: sc-bxivhb */
    .sc-bxivhb {} .gNxrLP{color:red;}
    /* sc-component-id: sc-ifAKCX */
    .sc-ifAKCX {} .fDAdfP{color:yellow;}</style>

  HTML:
  <div class="sc-bdVaJa UoSJW"><div class="sc-bwzfXH jSiEbM">Hello</div><div class="sc-htpNat cyinBP">How</div><div class="sc-bxivhb gNxrLP">Are</div><div class="sc-ifAKCX fDAdfP">You</div></div>


  -------------------

  [/app]

  This is an app that imports the linked module /3rd-party-lib for use.

  Running `collectStyles` from here fails to collect styles since the instance
  of styled-components that created the components is located in a linked module.

  CSS:


  HTML:
  <div class="sc-bdVaJa UoSJW"><div class="sc-bwzfXH jSiEbM">Hello</div><div class="sc-htpNat cyinBP">How</div><div class="sc-bxivhb gNxrLP">Are</div><div class="sc-ifAKCX fDAdfP">You</div></div>


  -------------------

  [/]

  This is the project root that imports /app and /3rd-party-lib, and yarn links.

  Running `collectStyles` from here fails to collect styles since the  instance
  of styled-components that created the components is located in a linked module.

  CSS:


  HTML:
  <div class="sc-bdVaJa UoSJW"><div class="sc-bwzfXH jSiEbM">Hello</div><div class="sc-htpNat cyinBP">How</div><div class="sc-bxivhb gNxrLP">Are</div><div class="sc-ifAKCX fDAdfP">You</div></div>
```
