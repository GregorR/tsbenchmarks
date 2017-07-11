BS=gregor morse/typed sieve/typed snake/typed suffixtree tetris/typed
TSC=tsc
TSCFLAGS=--noImplicitAny

all:
	for b in $(BS); do \
		echo "$$b" ; \
		( cd "$$b" ; $(TSC) $(TSCFLAGS) *.ts ) ; \
	done
