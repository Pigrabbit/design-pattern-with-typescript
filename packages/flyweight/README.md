# Flyweight

## Intent

객체 사이에 공통되는 부분을 객체끼리 공유함으로서 메모리를 절약할 수 있도록 하는 design pattern. 
- Refactoring Guru

어떤 클래스의 인스턴스 1개만 가지고 여러 개의 ‘가상 인스턴스'를 제공하고 싶을 때 사용하면 된다 
- Head First Design Pattern

Sharing을 통해 다수의 객체들의 상태를 지원한다.

## Problem

객체를 수천-수만 개 만들고 관리하면 메모리(RAM)가 부족하여 애플리케이션/시스템이 느려지는 문제가 발생한다.

## Solution

Intrinsic state, Extrinsic state를 구분한다. Intrinsic state는 Flyweight 객체에, Extrinsic state는 기존 객체에 그대로 둔다.

### How to implement

1. Flyweight 를 적용할 클래스의 필드를 2가지(intrinsic, extrinsic)로 분리하자
2. Intrinsic state는 클래스에 남겨두고 immutable인지 확인한다. 
3. Extrinsic state를 사용하는 method에서 필드대신 parameter를 사용하도록 수정한다
4. 선택적으로, Flyweight Factory 클래스를 만들어 Flyweight collection을 관리한다. 새로운 flyweight를 생성하기전에 이미 있는지 확인한다.

## Structure

![](./img/structure.png)

## Applicability

다뤄야하는 객체의 수가 많을 때 Flyweight를 활용하면 메모리 비용은 절감할 수 있다.

## Pros and Cons

### Pros

- 메모리 절약

### Cons

- 특정 인스턴스만 다른 인스턴스와 다르게 동작하게 만들기 어렵다
- 코드의 복잡성(하나의 Entity에 대한 필드가 서로 다른 클래스에 파편화)


## Reference

[Refactoring Guru::Flyweight](https://refactoring.guru/design-patterns/flyweight)