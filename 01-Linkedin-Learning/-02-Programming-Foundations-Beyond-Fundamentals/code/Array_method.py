flips = [
    'heads',
    'tails',
    'tails',
    'heads',
    'tails',
]

print(flips.count('heads')) # 2
print(flips.count('tails')) # 3
print(flips.pop()) # tails
# ------------------------#
names = [
    'Ahmed',
    'mohamed',
    'eid',
    'Ahmed',
    'eid',
]

print(names.count('ahmed')) # 0
print(names.count('Ahmed')) # 2
print(names.pop()) # eid
# ------------------------#