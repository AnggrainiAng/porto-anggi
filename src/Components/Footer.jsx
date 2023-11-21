import { Box, Divider, Link, Text, VStack } from "@chakra-ui/react";

function Footer() {
  return (
    <Box p={4} backgroundColor={"#222222"} color="white">
      <VStack align="center" spacing={4}>
        <Text fontSize="xs" fontWeight="bold">
          Anggraini
        </Text>
        <Divider />
        <Text fontSize={"small"}>
          &copy; 2023 My Company. All rights reserved.
        </Text>
        <Link href="#" fontSize={"small"}>
          Terms of Service
        </Link>
        <Link href="#" fontSize={"small"}>
          Privacy Policy
        </Link>
      </VStack>
    </Box>
  );
}

export default Footer;
