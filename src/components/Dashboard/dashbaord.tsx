import { AppShell, Header, Text, useMantineTheme } from "@mantine/core";
import SaveButton from "../SaveButton/saveButton";

export default function Dashbaord() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header height={{ base: 50, md: 70 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              backgroundColor: theme.colors.gray[2],
              padding: "0 100px",
            }}
          >
            <Text p="md">Flow Builder</Text>
            <SaveButton />
          </div>
        </Header>
      }
    ></AppShell>
  );
}
