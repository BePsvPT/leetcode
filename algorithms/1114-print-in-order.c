typedef struct {
    // User defined data may be declared here.
    int step;
} Foo;

Foo* fooCreate() {
    Foo* obj = (Foo*) malloc(sizeof(Foo));

    obj->step = 1;

    return obj;
}

void first(Foo* obj) {
    if (obj->step == 1) {
        printFirst();
        obj->step++;
    }
}

void second(Foo* obj) {
    while (obj->step < 2) {
        usleep(50);
    }

    printSecond();
    obj->step++;
}

void third(Foo* obj) {
    while (obj->step < 3) {
        usleep(50);
    }

    printThird();
    obj->step++;
}

void fooFree(Foo* obj) {
    // User defined data may be cleaned up here.
}
