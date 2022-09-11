first_name = "ahmed"
last_name = "eid"
note = "I love python and javascript"
# --- capitalize ()
first_cap=first_name.capitalize()
last_cap=last_name.capitalize()
print(first_cap) # Ahmed
print(last_cap) # Eid
# ----
# ------find () & index () search from the first of string
# ----
# --- find ()
print(note.find('javascript')) # find in index 18
print(note.find('python')) # find in index 7
# --- index()
print(note.index('javascript')) # find in index 18
print(note.index('python')) # find in index 7

# ----
# ------rfind () & rindex () search from the end of string
# ----
# --- rfind ()
print(note.rfind('p')) # find in index 26
# --- rindex ()
print(note.rindex('t')) # find in index 27
