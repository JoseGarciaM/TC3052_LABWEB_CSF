import useTranslation from 'next-translate/useTranslation';
import {Wrapper, Navigation, Menu, Logo, Background} from '.';

export default function Header(props) {
  const {
    headerBlur,
    headerWidth,
    headerBorder = false
  } = props;

  const {t} = useTranslation();
  const menuItems = [
    {
      "label": t('common:HeaderProducts'),
      "ariaLabel": t('common:HeaderProducts'),
      "href": "/products",
    },
    {
      "label": t('common:HeaderCocktails'),
      "ariaLabel": t('common:HeaderCocktails'),
      "href": "/cocktails",
    },
    {
      "label": t('common:HeaderAboutUs'),
      "ariaLabel": t('common:HeaderAboutUs'),
      "href": "/about-us",
    },
    {
      "label": t('common:HeaderContact'),
      "ariaLabel": t('common:HeaderContact'),
      "href": "/contact",
    },
    {
      "label": "Instagram",
      "ariaLabel": "Instagram",
      "href": "/contact",
    },
  ];

  return (
    <header className="fixed z-500 inset-x-0 top-0">
      <Wrapper width={headerWidth}>
        <Navigation>
          <Navigation.Widgets>
            <div className="relative z-20">
              <div className="btn-xs sm:btn-sm lg:btn btn-flex uppercase">
                
              </div>
            </div>
            <Logo/>
            <div className="relative z-20">
              <div className="btn-xs sm:btn-sm lg:btn btn-primary btn-flex btn-px-sm sm:btn-px md:btn-px-lg lg:btn-px-2xl uppercase tracking-wider">
                {t('common:HeaderShopNow')}
              </div>
            </div>
          </Navigation.Widgets>
          <Navigation.Menus>
            <Menu>
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.label} 
                  href={item.href}
                  label={item.label}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </Menu>
          </Navigation.Menus>
        </Navigation>
      </Wrapper>
      <Background 
        backgroundBorder={headerBorder}
        backgroundBlur={headerBlur}
      />
    </header>
  )
}

