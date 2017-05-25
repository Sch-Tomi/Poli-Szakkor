#!/usr/bin/python
# -*- coding: utf-8 -*-

import random

abc = 'abcdefghijklmnopqrstuvwxyz'
secretPW = ''.join(random.choices(abc, k=random.randint(1,5)))


def letMeIn(password):
    return password == secretPW


def main():
    complete_list = [i for i in abc]
    a = [i for i in abc]
    for current in range(3):
        b = []
        for x in complete_list:
            for y in a:
                word = x+y
                print(word)
                if letMeIn(word):
                    print("MEGVAN!!! " + word)

                b.append(word)
        complete_list = b





if __name__ == '__main__':
    main()
