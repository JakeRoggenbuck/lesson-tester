int_team_number = int(input("What is the team number? "))
str_team_name = input("What is the team name? ")
str_location = input("Where is the team located? ")
int_rookie_year = input("What year was the team started? ")
bool_is_active = input("Is the team still active? ")


assert isinstance(int_team_number, int)
assert isinstance(str_team_name, str)
assert isinstance(str_location, str)
assert isinstance(int_rookie_year, int)
assert isinstance(bool_is_active, bool)
