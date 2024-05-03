interface NavItem {
  title: string;
  icon: string;
  to: string;
  onlyLoggedIn?: boolean;
  onlyAdmin?: boolean;
  exact?: boolean;
}

export const useNavigationDrawer = () => {
  const drawer = useState<boolean | null>("drawer", () => null);

  const open = () => {
    drawer.value = true
  }

  const close = () => {
    drawer.value = false
  }

  const toggle = () => {
    drawer.value = !drawer.value
  }

  const navItems = computed<NavItem[]>(() => {
    return [
      {
        title: "Home",
        icon: "mdi-home",
        to: "/",
        onlyLoggedIn: false,
        exact: true,
      },
      {
        title: "Multisig",
        icon: "mdi-wallet",
        to: "/wallet/multisig",
        onlyLoggedIn: true,
        onlyAdmin: true,
        exact: true,
      },
      {
        title: "NFTs",
        icon: "mdi-music-box",
        to: "/admin/nfts",
        onlyLoggedIn: false,
        onlyAdmin: true,
        exact: true,
      },
      {
        title: "Tracks",
        icon: "mdi-music",
        to: "/admin/tracks",
        onlyLoggedIn: false,
        onlyAdmin: true,
        exact: true,
      },
      {
        title: "Player",
        icon: "mdi-music",
        to: "/player",
        onlyLoggedIn: true,
        onlyAdmin: true,
        exact: true,
      }
    ];
  });

  return {
    drawer,
    open,
    close,
    toggle,
    navItems
  }
}