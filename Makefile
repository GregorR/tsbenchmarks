BS=gregor morse/typed sieve/typed snake/typed suffixtree tetris/typed
TSC=tsc
TSCFLAGS=--noImplicitAny --generateContracts

all:
	for b in $(BS); do \
		echo "$$b" ; \
		( cd "$$b" ; $(TSC) $(TSCFLAGS) *.ts ) ; \
	done

annotationInfo:
	for b in $(BS); do \
		echo "$$b"; \
		( \
			cd "$$b" ; \
			printf "{\"benchmark\": \"%s\", \"files\": [" "$$b" ; \
			for t in *.ts; do \
				printf "{\"name\": \"%s\", \"annotations\": " "$$t" ; \
				printf "%d" `tsc --annotationMangler 00 "$$t" | grep "^$$t:" | cut -d' ' -f2` ; \
				printf "}, " ; \
			done ; \
			printf "null]}" \
		) > "$$b/annotations.json" ; \
	done

clean:
	for b in $(BS); do \
		echo "$$b" ; \
		( cd "$$b" ; rm -f *.js ) ; \
	done
