import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

function NavMobile() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
      />
      <MenuList>
        <MenuItem>
          <Link href="#about">About Me</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#portofolio">Portofolio</Link>
        </MenuItem>
        <MenuItem>
          <Link href="#skills">Skills</Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default NavMobile;
