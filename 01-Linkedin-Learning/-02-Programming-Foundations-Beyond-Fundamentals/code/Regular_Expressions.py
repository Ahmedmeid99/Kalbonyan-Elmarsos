
import re


numbers1='87109'
numbers2='87-10-9'
reg_Ex1=r'\d{5}'
print(re.search(reg_Ex1,numbers1)) # <re.Match object; span=(0, 5), match='87109'>
print(re.search(reg_Ex1,numbers2)) # None
print(re.search(r'\d{2}-\d{2}-\d{1}',numbers2)) # <re.Match object; span=(0, 7), match='87-10-9'>
