def check_temp(temp):
    if  temp < 15:
        print('Bring a jacket')
    elif temp > 15 and temp <= 35:
        print('Pack a jacket')
    elif temp > 35:
        print('Leave the jacket at home')

check_temp(14)
check_temp(30)
check_temp(30)