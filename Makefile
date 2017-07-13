BS=gregor morse/typed sieve/typed snake/typed suffixtree tetris/typed
TSC=tsc
TSCFLAGS=--noImplicitAny --generateContracts

all:
	for b in $(BS); do \
		echo "$$b" ; \
		( cd "$$b" ; $(TSC) $(TSCFLAGS) *.ts ) ; \
	done

clean:
	for b in $(BS); do \
		echo "$$b" ; \
		( cd "$$b" ; rm -f *.js ) ; \
	done
