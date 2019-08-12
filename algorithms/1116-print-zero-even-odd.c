typedef struct {
    int n;
    int zero;
    int odd;
    int even;
    int step;
    int type;
} ZeroEvenOdd;

ZeroEvenOdd* zeroEvenOddCreate(int n) {
    ZeroEvenOdd* obj = (ZeroEvenOdd*) malloc(sizeof(ZeroEvenOdd));
    obj->n = n;
    obj->zero = 1;
    obj->odd = 1;
    obj->even = 2;
    obj->step = 0;
    obj->type = 0;
    return obj;
}

// You may call global function `void printNumber(int x)`
// to output "x", where x is an integer.

void zero(ZeroEvenOdd* obj) {
    while (obj->step < obj->n) {
        if (obj->zero == 1) {
            obj->zero = 0;
            printNumber(0);
            obj->type = (obj->step & 1) ? 2 : 1;
        }

        usleep(50);
    }
}

void even(ZeroEvenOdd* obj) {
    while (obj->step < obj->n) {
        if (obj->type == 2) {
            obj->type = 0;
            printNumber(obj->even);
            obj->step++;
            obj->even += 2;
            obj->zero = 1;
        }

        usleep(50);
    }
}

void odd(ZeroEvenOdd* obj) {
    while (obj->step < obj->n) {
        if (obj->type == 1) {
            obj->type = 0;
            printNumber(obj->odd);
            obj->step++;
            obj->odd += 2;
            obj->zero = 1;
        }

        usleep(50);
    }
}

void zeroEvenOddFree(ZeroEvenOdd* obj) {
}
