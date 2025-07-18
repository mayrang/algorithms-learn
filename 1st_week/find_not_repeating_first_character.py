input = "abadabac"
# ㅂㅏ보같은 박건상의 방법..
# def find_not_repeating_first_character(string):
#     find_num = 0
#     for charIndex in range(len(string)):
#         for char2Index in range( len(string)):
#             if string[charIndex] == string[char2Index]:
#                 find_num += 1
#
#         if find_num == 1:
#             return string[charIndex]
#         else:
#             find_num = 0
#     return "_"


def find_not_repeating_first_character(string):
    alphabet_occurrence_array = [0] * 26

    for char in string:
        if not char.isalpha():
            continue
        arr_index = ord(char) - ord("a")
        alphabet_occurrence_array[arr_index] += 1

    not_repeating_character_array = []
    for index in range(len(alphabet_occurrence_array)):
        alphabet_occurrence = alphabet_occurrence_array[index]

        if alphabet_occurrence == 1:
            not_repeating_character_array.append(chr(index + ord("a")))

    for char in string:
        if char in not_repeating_character_array:
            return char

    return "_"


result = find_not_repeating_first_character
print("정답 = d 현재 풀이 값 =", result("abadabac"))
print("정답 = c 현재 풀이 값 =", result("aabbcddd"))
print("정답 =_ 현재 풀이 값 =", result("aaaaaaaa"))